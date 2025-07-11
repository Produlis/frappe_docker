frappe.pages['pagina-test-2'].on_page_load = function (wrapper) {
	const page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Subida de Imagen',
		single_column: true
	});

	// Campo para subir archivo
	const file_field = frappe.ui.form.make_control({
		df: {
			label: "Imagen",
			fieldname: "imagen",
			fieldtype: "Attach",
			reqd: 1
		},
		parent: page.body,
		render_input: true
	});

	// Contenedor para la barra de progreso
	const progress_wrapper = $(`<div style="margin-top: 20px; display: none;">
        <label>Progreso</label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" style="width: 0%">0%</div>
        </div>
    </div>`).appendTo(page.body);

	// Botón para enviar
	const btn = $(`<button class="btn btn-primary" style="margin-top: 15px;">Enviar a Xano</button>`);
	btn.appendTo(page.body);

	btn.on("click", function () {
		const file_url = file_field.get_value();

		if (!file_url) {
			frappe.msgprint("Por favor, sube una imagen.");
			return;
		}

		// Mostrar barra de progreso
		progress_wrapper.show();
		let progress = 0;

	

		// Crear documento en backend
		frappe.call({
			method: "frappe.client.insert",
			args: {
				doc: {
					doctype: "subir imagen",
					imagen: file_url,
					usuario: frappe.session.user
				}
			},
			callback: function (r) {
				if (!r.exc) {
					// Simular progreso
					const interval = setInterval(() => {
						progress += 10;
						progress_wrapper.find(".progress-bar").css("width", progress + "%").text(progress + "%");

						if (progress >= 100) {
							clearInterval(interval);
							frappe.msgprint("Imagen guardada en el servidor correctamente.");
						}
					}, 300);
				} else {
					frappe.msgprint("Error al guardar en el backend.");
				}
			}
		});

		
	});

	frappe.realtime.on("progreso_actualizado", (data) => {
		frappe.msgprint(`Progreso actualizado: ${data.progreso}%`);
		console.log("Progreso actualizado:", data);
	});
};

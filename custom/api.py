import frappe
from frappe import _

from frappe import publish_realtime  

@frappe.whitelist(allow_guest=True)
def actualizar_progreso(nombre_doc, nuevo_valor):
    doc = frappe.get_doc("subir imagen", nombre_doc)
    doc.progreso = nuevo_valor
    doc.save()

    # Enviar evento websocket
    frappe.publish_realtime(
        event="progreso_actualizado",
        message={
            "docname": nombre_doc,
            "progreso": nuevo_valor
        },
        user=None  # o None si es para todos
    )

    return {"status": "ok", "nuevo_progreso": nuevo_valor}

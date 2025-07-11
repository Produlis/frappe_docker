docker logs frappe_docker-backend-1 --tail 50
docker compose -f pwd.yml up -d

bench new-site dev.local

$ bench --site frontend install-app library_management

bench --site frontend uninstall-app library_management

bench remove-app library_management

bench new-app library_management

bench --site frontend install-app custom_app

docker compose -f pwd.yml up -d --build

./env/bin/pip install -e apps/custom_app

bench export-fixtures --app mi_app

yarn install en cada folder de proyecto

{
 "db_name": "_462ffdaff1e9c315",
 "db_password": "7EZDNcrZNjPStSKq",
 "db_type": "mariadb",
 "developer_mode": 1
}



{
    "background_workers": 1,
    "db_host": "mariadb",
    "db_port": 3306,
    "default_site": "dev.local",
    "file_watcher_port": 6787,
    "frappe_user": "frappe",
    "gunicorn_workers": 25,
    "live_reload": true,
    "rebase_on_pull": false,
    "redis_cache": "redis://redis-cache:6379",
    "redis_queue": "redis://redis-queue:6379",
    "redis_socketio": "redis://redis-queue:6379",
    "restart_supervisor_on_update": false,
    "restart_systemd_on_update": false,
    "root_login": "root",
    "root_password": "123",
    "serve_default_site": true,
    "shallow_clone": true,
    "socketio_port": 9000,
    "use_redis_auth": false,
    "webserver_port": 8000,
    "developer_mode": 1
}

bench export-fixtures --app mi_app
module.exports = {
  apps : [{
    name   : "piXel_curriculo [5000]",
    script : "./app/server.js",
    watch_delay: 5000,
    watch: false,
    wait_ready: true,
    ignore_watch : ["node_modules", "tokens", "public"],
    log_date_format: "DD-MM-YYYY HH:mm ",
  }]
}

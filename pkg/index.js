import('./hello_wasm').then(async m => {
    await m.default()
    m.greet('hello')
})

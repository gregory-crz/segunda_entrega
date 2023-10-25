const misProductos = [
    { id: "1", nombre: "Coca-Cola", precio: 800, img: "../img/coca.png", idCat: "2" },
    { id: "2", nombre: "Coca-Cola Sin azúcar", precio: 800, img: "../img/cZero.png", idCat: "2" },
    { id: "3", nombre: "Johnnie Walker Red Label 750ml", precio: 2000, img: "../img/whiskyR.png", idCat: "3" },
    { id: "4", nombre: "Johnnie Walker Black Label 750ml", precio: 3000, img: "../img/whiskyN.png", idCat: "3" },
    { id: "5", nombre: "Fanta", precio: 800, img: "../img/fanta.png", idCat: "2" },
    { id: "6", nombre: "Johnnie Walker Blonde 750 Ml", precio: 5000, img: "../img/whiskyB.png", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
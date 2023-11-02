const misProductos = [
    { id: "1", nombre: "Coca-Cola" ,stock:15 , precio: 800, img: "../img/coca.png", idCat: "2" },
    { id: "2", nombre: "Coca-Cola Sin azúcar" ,stock:15 , precio: 800, img: "../img/cZero.png", idCat: "2" },
    { id: "3", nombre: "Johnnie Walker Red Label 750ml" ,stock:15 , precio: 2000, img: "../img/whiskyR.png", idCat: "3" },
    { id: "4", nombre: "Johnnie Walker Black Label 750ml" ,stock:15 , precio: 3000, img: "../img/whiskyN.png", idCat: "3" },
    { id: "5", nombre: "Fanta", precio: 800, img: "../img/fanta.png" ,stock:15 , idCat: "2" },
    { id: "6", nombre: "Johnnie Walker Blonde 750 Ml", precio: 5000 ,stock:15 , img: "../img/whiskyB.png", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 1000)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1000)
    })
}
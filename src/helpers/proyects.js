import mainViewAvilaPizza from '../images/project/pizzaRestaurant/mainView.png';
import mainViewWikipediaSearch from '../images/project/wikipediaSearch/mainView.png';
import mainViewTicTacToe from '../images/project/ticTacToe/mainView.png';
import mainViewCalendarApp from '../images/project/CalendarApp/mainView.png';
import mainViewShoppingApi from '../images/project/ShoppingApi/mainView.png';



const proyects = {
    "proyects": [
        {
            "title": "Avila Pizza App",
            "id": "f2f2e9cf-ed4a-43ec-b4ad-96dc70e62a5f",
            "resume": "Avila Pizza es una una app construida en React que consiste en una web en la cual puedes elegir la pizza favortita que desees y de manera simulada realizar la compra de la misma",
            "mainView": mainViewAvilaPizza,
            "descripcion": "El proyecto fue realizado en base a create-react-app y firebase como solucion rapida y eficiente de una base de datos, cuenta con un menu el cual despliega un modal al ser seleccionado. Para obtener los datos y validarlos, elegi la libreria Formik, la cual resulto facil de utilizar e intuitiva, tambien cuenta con un carrito de compras y la simulacion del proceso de compras, el mismo fue todo un reto, ya que al utilizar useContext para compartir los valores entre cada componente se presentaron ciertos inconvenientes en cuanto a la renderizacion y loops infinitos; sin embargo, con constancia termine de completar la misma segun lo que tenia estimado",
            "tecnologias": ["React", "Chakra-ui", "Firebase", "UseContext", "React-Router-Dom", "Style-Components", "Yup", "Formik"],
            "link": "https://avila-pizza-app.netlify.app/",
            "galery-Image": ["https://i.ibb.co/ySCxfpD/screencapture-localhost-3000-2022-01-19-18-10-01.png", "https://i.ibb.co/NFjMymg/screencapture-localhost-3000-checkout-0-Vtrg-B2-P1-Kh-OD9-GVrf8dzp-Fla-Cz93-2022-01-19-18-11-27.png", "https://i.ibb.co/B3LbVnd/screencapture-localhost-3000-auth-register-2022-01-19-18-12-27.png", "https://i.ibb.co/HTPMqNw/screencapture-localhost-3000-auth-login-2022-01-19-18-11-54.png"]
        }, 
        {
            "title": "Wikipedia Search",
            "id": "6484adf2-4d4f-4935-b31d-33d2ccf14044",
            "resume": "Esta aplicacion permite realizar busquedas correspondientes a articulos de Wikipedia y adicionalmente muestra los articulos mas relevantes del mes, entre otras opciones de interes",
            "mainView": mainViewWikipediaSearch,
            "descripcion": "La aplicacion tiene como función principal realizar busquedas a traves de la API publica de wikipedia la cual permite obtener los datos de los resultados de la busqueda, asi como tambien los articulos mas relevantes y mas populares del mes segun los datos de la API. La construcion de esta app fue de gran ayuda en cuanto a la practica de conexiones a las API y posteriormente mostrar los datos en pantalla, asi como tambien limpiar la data que se se pudo obtener de la misma",
            "tecnologias": ["React", "Material UI", "Redux", "Redux-localstorage", "React-Router-Dom", "Redux-Thunk", "React-Slick"],
            "link": "https://wikipedia-search-reactjs.vercel.app/",
            "galery-Image": ["https://i.ibb.co/vsnDxJq/Annotation-2022-01-19-154826.png", "https://i.ibb.co/hHCjyKb/screencapture-localhost-3000-2022-01-19-16-19-26.png", "https://i.ibb.co/y8jBys1/screencapture-localhost-3000-bookmarks-2022-01-19-18-57-52.png", "https://i.ibb.co/JRpgq2z/screencapture-localhost-3000-category-History-2022-01-19-18-58-28.png"]
        }, 
        {
            "title": "Tic Tac Toe",
            "id": "b801b76e-f20a-4902-bcc6-9746f6b7679e",
            "resume": "Juego de Tic Tac Toe con funcion de multijugador o jugador vs computadora",
            "mainView": mainViewTicTacToe,
            "descripcion": "El juego fue construido a traves de la CDN de React, tiene la funcionalidad de las opciones de multijugador y jugador vs conputadora. El mismo fue todo un reto de crear ya que realizar el bot de la computadora teniendo en cuenta los factores para la correcta jugabilidad del juego contra la computadora fue todo un rompecabezas, pero fue placentero poder lograr culminarlo",
            "tecnologias": ["React", "css", "js"],
            "link": "https://react-js-tic-tac-toe.vercel.app/",
            "galery-Image": ["https://i.ibb.co/9G8BcZ6/mainView.png", "https://i.ibb.co/y4LvT2s/screencapture-react-js-tic-tac-toe-vercel-app-2022-01-24-07-28-57.png", "https://i.ibb.co/nP5cmJZ/tic-Tac-Toe1.png", "https://i.ibb.co/t4hzQLk/tic-Tac-Toe2.png"]
        },
        {
            "title": "Calendar App",
            "id": "8957a836-de33-412a-b086-fa48ca66ae58",
            "resume": "Calendar app permite organizar tu dia a dia y compartirla con tus compañeros",
            "mainView": mainViewCalendarApp,
            "descripcion": "La app cuenta con un proceso de registro y login el cual esta conectado a un backend generado con Nodejs, MongoDB, Express y validacion a traves de JWT. Permite generar eventos en un calendario para la organización diaria del proceso de trabajo, además cada persona que se registre puede lograr visualizar los eventos generados por sus compañeros",
            "tecnologias": ["React", "Redux", "React-Router-Dom", "Redux-Thunk", "React-Datetime-Picker", "React-Big-Calendar", "Moment", "MongoDB", "Express", "NodeJs", "mongoose", "jsonwebtoken"],
            "link": "https://calendar-app-backend-yeik.herokuapp.com/",
            "galery-Image": ["https://i.ibb.co/5YmsJWK/mainView.png", "https://i.ibb.co/f4GvWXS/screencapture-calendar-app-backend-yeik-herokuapp-2022-01-20-20-01-25.png", "https://i.ibb.co/KF6Pbn1/screencapture-calendar-app-backend-yeik-herokuapp-login-2022-01-20-19-59-27.png", "https://i.ibb.co/RTbwdjn/screencapture-calendar-app-backend-yeik-herokuapp-register-2022-01-20-19-59-39.png"]
        }, 
        {
            "title": "Shopping Api",
            "id": "c93a32a7-995d-48c8-8fc5-862380da5a33",
            "resume": "Api Rest que permite gestionar una base de datos correspondiente a una tienda de productos",
            "mainView": mainViewShoppingApi,
            "descripcion": "La api cuenta con la función de la creación de usuarios y la validación de estos mediante JWT así también como la administración de los mismos mediante un administrador, dispone de la posibilidad de crear productos y a su vez incluir la fotografía que lo identifica y finalmente la posibilidad de obtener datos mediante búsquedas tanto de usuarios como de productos",
            "tecnologias": ["MongoDB", "Express", "NodeJs", "mongoose", "jsonwebtoken", "cloudinary"],
            "link": "https://github.com/yenselleon/SHOPPING-API",
            "galery-Image": [mainViewShoppingApi, mainViewShoppingApi, mainViewShoppingApi, mainViewShoppingApi]
        }, 
    ]

} 

export default proyects;
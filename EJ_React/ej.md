# Dojo React: componentes, props y hooks

## Ejercicio 1: componente simple

Crea un componente `Saludo` que reciba un prop `nombre` y muestre un mensaje de saludo. Luego renderiza el componente en tu `App` con tu nombre.

## Ejercicio 2: componente con props múltiples

Crea un componente `Perfil` que reciba `nombre`, `edad` y `profesion` como props y muestre un mensaje que combine estas tres propiedades. Renderiza el componente varias veces con diferentes valores.

## Ejercicio 3: componente anidado

Crea un componente `Tarjeta` que reciba `titulo` y `contenido` como props. Dentro de `Tarjeta`, renderiza un componente hijo `Contenido` que solo reciba la prop `contenido`. Renderiza varias tarjetas desde tu `App`.

## Ejercicio 4: evento click simple

Crea un componente `BotonAlerta` que muestre un botón. Al hacer clic, debe mostrar un `alert` con un mensaje de tu elección.

## Ejercicio 5: evento input simple

Crea un componente `InputConsola` que tenga un input de texto y un botón. Al hacer clic en el botón, debe imprimir en la consola el valor actual del input.

## Ejercicio 6: lista de props estática

Crea un componente `Fruta` que reciba una prop `nombre`. Luego crea un componente `ListaFrutas` que reciba un array de nombres de frutas y renderice varias instancias de `Fruta` mostrando cada fruta.

## Ejercicio 7: useState básico

Crea un componente `Contador` con un estado `contador` inicializado en 0. Agrega un botón que incremente el contador en 1 cada vez que se haga clic y muestra el valor actual en pantalla.

## Ejercicio 8: useState con input

Crea un componente `FormularioNombre` con un input para ingresar el nombre del usuario. Muestra debajo del input un mensaje en tiempo real que diga: `"Hola, {nombre}"` mientras se escribe.

## Ejercicio 9: lista dinámica con props
 
Crea un componente `Tarea` que reciba una prop `titulo`. Luego crea un componente `ListaTareas` que reciba un array de tareas y renderice varias `Tarea`. Opcional: agrega un botón para eliminar tareas de la lista usando `useState`.

## Ejercicio 10: formulario con react-hook-form

Crea un componente `LoginForm` con campos `email` y `password`. Usa `useForm` para controlar el formulario. Al enviar, imprime los datos en la consola. Extra: añade validaciones simples (email requerido y password mínimo 6 caracteres).
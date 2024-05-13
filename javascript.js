document.addEventListener




  const products = document.querySelectorAll('.product');
  const cartList = document.querySelector('.cart-list');
  const totalElement = document.querySelector('.total span');
  const clearCartButton = document.querySelector('.clear-cart');

  let cart = [];

  products.forEach(product => {
      const addToCartButton = product.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click' , () => addToCart(product));
  }); 
  
  clearCartButton.addEventListener('click', clearCart);

  function addToCart(product) { 
    const productId = product.dataset.id;
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

    const existingProduct = cart.find(item => item.id === productId);
   
    if (existingProduct) { 
        existingProduct.quantity +=1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1});

    }
    updateCartUi();
  }

function updateCartUi() { 
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
      cartList.appendChild(listItem);
      total += item.price * item.quantity;
    });

    totalElement.textContent = `${total.toFixed("2")}`;

    const removeButtons = document.querySelectorAll('.remove-item');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => removeItem(button.dataset.id));

    });
}

function mostrarVentana() {
  document.getElementById('miVentana').style.display = 'block';
}

// Función para cerrar la ventana emergente
function cerrarVentana() {
  document.getElementById('miVentana').style.display = 'none';
}
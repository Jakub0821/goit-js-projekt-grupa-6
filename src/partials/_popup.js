const startTime = new Date().getTime();
let interval = 1000;

function sprawdzElement() {
    const elements = document.querySelectorAll(".books-item-link");
    if (elements.length > 0) {
        elements.forEach(function(element) {
            element.removeEventListener('click', clickHandler);
            element.addEventListener('click', clickHandler);
        });
        callback(elements);
        return;
    }

    if (new Date().getTime() - startTime > 5000) {
        console.error("Przekroczono limit czasu. Żaden element nie został znaleziony.");
    } else {
        setTimeout(sprawdzElement, interval);
    }
}

function clickHandler(event) {
  const clickedElement = event.currentTarget;
  const dataId = clickedElement.getAttribute('data-id');
  console.log(`Id książki='${dataId}'`);

  wyswietlModal();
}

function wyswietlModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'block';

        const span = document.querySelector(".popup__close-button-span");
        const closeButton = document.getElementById("myBtn");

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        document.addEventListener('keydown', function(event) {
            event.preventDefault();
            if (event.key === 'Escape') {
                modal.style.display = "none";
            }
        });
    }
}

sprawdzElement();

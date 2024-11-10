document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit');
    const errorDiv = document.getElementById('error');
    const summaryTable = document.getElementById('summaryTable').querySelector('tbody');
    const searchInput = document.getElementById('search');

    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const mobile = mobileInput.value.trim();
        const email = emailInput.value.trim();

        if (validateName(name) && validateMobile(mobile) && validateEmail(email)) {
            addContact(name, mobile, email);
            clearForm();
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }
    });

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.trim();
        searchContactByMobile(searchQuery);
    });

    function validateName(name) {
        const nameRegex = /^[A-Za-z\s]{1,20}$/;
        return nameRegex.test(name);
    }

    function validateMobile(mobile) {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z][a-zA-Z0-9.]{1,9}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;
        return emailRegex.test(email);
    }

    function addContact(name, mobile, email) {
        const newRow = summaryTable.insertRow();
        const nameCell = newRow.insertCell(0);
        const mobileCell = newRow.insertCell(1);
        const emailCell = newRow.insertCell(2);

        nameCell.textContent = name;
        mobileCell.textContent = mobile;
        emailCell.textContent = email;

        window.contactsList.push({ name, mobile, email });
    }

    function clearForm() {
        nameInput.value = '';
        mobileInput.value = '';
        emailInput.value = '';
    }

    function searchContactByMobile(query) {
        // Clear current rows
        summaryTable.innerHTML = '';

        // Filter contacts
        const filteredContacts = window.contactsList.filter(contact => contact.mobile.includes(query));

        // Display filtered contacts
        filteredContacts.forEach(contact => {
            const newRow = summaryTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const mobileCell = newRow.insertCell(1);
            const emailCell = newRow.insertCell(2);

            nameCell.textContent = contact.name;
            mobileCell.textContent = contact.mobile;
            emailCell.textContent = contact.email;
        });

        // Display "No Results Found" if no contacts match the query
        const noResultDiv = document.getElementById('noResult');
        if (filteredContacts.length === 0) {
            noResultDiv.style.display = 'block';
        } else {
            noResultDiv.style.display = 'none';
        }
    }
});


/*

First display the message, then after 3 seconds delete it.

document.getElementById("alarmmsg").innerHTML = msg;

setTimeout(function(){
    document.getElementById("alarmmsg").innerHTML = '';
}, 3000);

setTimeout(()=> {
  	alert("HI");
  	document.getElementById("demo").innerHTML = "HI";
  },3000 )


setTimeout(function,time);

get api calls

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

fetch("api")
.then(response => {
    
    })
.then(data => {
    
    })

post api calls 
fetch("api", body)

display or block
div.style.display = 'none';
div.style.dispaly = 'block';

const respoe = fetch("api", {
    method : POST,
    body:JSON.stringify({
        naame:"aditya",
        })

    })

*/
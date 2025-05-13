document.getElementById('parkingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const checkinTime = document.getElementById('checkinTime').value;
    const checkoutTime = document.getElementById('checkoutTime').value || 'Not yet checked out';
  
    const table = document.getElementById('parkingTable').getElementsByTagName('tbody')[0];
  

    const newRow = table.insertRow();
  
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4); 
  

    cell1.textContent = username;
    cell2.textContent = vehicleNumber;
    cell3.textContent = checkinTime;
    cell4.textContent = checkoutTime;
  

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#f44336'; // Red color for delete
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', function() {
      newRow.remove(); 
    });
  
    cell5.appendChild(deleteButton);

    document.getElementById('parkingForm').reset();
  });
  
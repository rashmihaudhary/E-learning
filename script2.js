// Open Edit Modal
function openEditModal() {
      document.getElementById('editModal').style.display = 'block';
  }
  
  // Close Edit Modal
  function closeEditModal() {
      document.getElementById('editModal').style.display = 'none';
  }
  
  // Save Profile Data
  function saveProfile() {
      let newName = document.getElementById('edit-name').value;
      let newEmail = document.getElementById('edit-email').value;
  
      if (newName) {
          document.getElementById('user-name').innerText = newName;
      }
      if (newEmail) {
          document.getElementById('user-email').innerText = newEmail;
      }
  
      closeEditModal();
  }
  
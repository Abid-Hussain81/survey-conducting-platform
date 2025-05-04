document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const planName = document.getElementById('plan-name');
    const planPrice = document.getElementById('plan-price');
  
    // Load from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPlan = localStorage.getItem('selectedPlan');
    const storedPrice = localStorage.getItem('selectedPrice');
  
    if (storedUsername) {
      usernameInput.placeholder = storedUsername;
      usernameInput.value = storedUsername;
    }
  
    if (storedPlan && storedPrice) {
      planName.textContent = `Selected Plan: ${storedPlan}`;
      planPrice.textContent = `$${storedPrice} / month`;
    }
  });
  
  // Payment method selection
  function selectPayment(method) {
    const username = document.getElementById('username').value;
    const plan = localStorage.getItem('selectedPlan');
    const price = localStorage.getItem('selectedPrice');
  
    if (!username) {
      alert('Please enter a username.');
      return;
    }
  
    // Simulate fetching session
    alert(`🔗 Fetching ${method.toUpperCase()} session for:
    - Username: ${username}
    - Plan: ${plan}
    - Price: $${price}/month
    `);
  
    // Example (in real app, you would do an API call like:)
    // fetch(`/api/create-session?method=${method}&plan=${plan}&price=${price}`)
    //   .then(res => res.json())
    //   .then(data => window.location.href = data.checkoutUrl);
  }
  
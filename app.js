document.getElementById('problemForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const problem = document.getElementById('problem').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/submitProblem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ problem, email })
    });

    const result = await response.json();
    if (response.ok) {
        alert(`Problem submitted successfully! Your ticket number is ${result.ticketNumber}`);
    } else {
        alert('Error submitting problem');
    }
});

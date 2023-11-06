function send_sms(message, phoneNumber){
    fetch('https://localhost:7000/Sms/Send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:{
                    "message": message,
                    "phoneNumber": phoneNumber
                }
            })
            .then(response => response.text())
            .then(text => {
                return text;
            })
            .catch(error => {
                console.error('Error:', error);
                return "Error occurred while fetching data";
            });
}

document.getElementById('previousButton').addEventListener('click', function () {
     
    if (document.referrer) {
      window.history.back();
    } else {
      alert("404 not found!");
    }
  });
  
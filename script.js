function showModal(pdfUrl) {
  const viewer = document.getElementById('pdfViewer');
  const downloadLink = document.getElementById('downloadLink');
  
  viewer.src = pdfUrl;
  downloadLink.href = pdfUrl;
  downloadLink.download = pdfUrl.split('/').pop();  // extract file name from URL

  document.getElementById('previewModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('previewModal').style.display = 'none';
}

// Optional: close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById('previewModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

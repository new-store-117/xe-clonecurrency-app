// Global helper functions
function showToast(message, type = "success") {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.style.cssText = `position: fixed; bottom: 20px; right: 20px; background: ${type === "success" ? "#1f7b5e" : "#c7443a"}; color: white; padding: 12px 24px; border-radius: 40px; z-index: 2000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);`;
    toast.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Load patients from localStorage
function getPatients() { return JSON.parse(localStorage.getItem('patients')) || []; }
function savePatients(patients) { localStorage.setItem('patients', JSON.stringify(patients)); }
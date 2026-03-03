// Age Verification Modal
(function() {
    'use strict';
    
    const AGE_VERIFIED_KEY = 'ageVerified';
    const AGE_VERIFIED_TIMESTAMP = 'ageVerifiedTime';
    const VERIFICATION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    
    function checkAgeVerification() {
        const verified = localStorage.getItem(AGE_VERIFIED_KEY);
        const timestamp = localStorage.getItem(AGE_VERIFIED_TIMESTAMP);
        
        if (verified === 'true' && timestamp) {
            const timePassed = Date.now() - parseInt(timestamp);
            if (timePassed < VERIFICATION_DURATION) {
                return true;
            }
        }
        return false;
    }
    
    function showAgeModal() {
        const modal = document.getElementById('ageVerificationModal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function hideAgeModal() {
        const modal = document.getElementById('ageVerificationModal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }
    
    function handleOver18() {
        localStorage.setItem(AGE_VERIFIED_KEY, 'true');
        localStorage.setItem(AGE_VERIFIED_TIMESTAMP, Date.now().toString());
        hideAgeModal();
    }
    
    function handleUnder18() {
        // Redirect to blank page or previous page
        if (window.history.length > 1) {
            window.history.back();
        } else {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#f8f9fa;"><div style="text-align:center;"><h1 style="font-size:2rem;color:#0a192f;margin-bottom:1rem;">Xin lỗi</h1><p style="color:#666;">Bạn phải đủ 18 tuổi để truy cập trang web này.</p></div></div>';
        }
    }
    
    // Initialize on page load
    window.addEventListener('DOMContentLoaded', function() {
        if (!checkAgeVerification()) {
            showAgeModal();
        }
        
        // Attach event listeners
        const over18Btn = document.getElementById('over18Btn');
        const under18Btn = document.getElementById('under18Btn');
        
        if (over18Btn) {
            over18Btn.addEventListener('click', handleOver18);
        }
        
        if (under18Btn) {
            under18Btn.addEventListener('click', handleUnder18);
        }
    });
})();

// Step 1: Get references to all HTML elements
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const maxChars = document.getElementById('maxChars');
const remaining = document.getElementById('remaining');
const clearBtn = document.getElementById('clearBtn');

// Step 2: Get the maximum character limit from textarea
const maxLength = textInput.getAttribute('maxlength');

// Step 3: Function to update character count
function updateCharCount() {
    // Get current length of text in textarea
    const currentLength = textInput.value.length;
    
    // Update the character count display
    charCount.textContent = currentLength;
    
    // Calculate remaining characters
    const remainingChars = maxLength - currentLength;
    remaining.textContent = remainingChars + ' remaining';
    
    // Change color based on remaining characters
    if (remainingChars <= 50 && remainingChars > 20) {
        // Warning: getting close to limit
        remaining.classList.remove('danger');
        remaining.classList.add('warning');
    } else if (remainingChars <= 20) {
        // Danger: very close to limit
        remaining.classList.remove('warning');
        remaining.classList.add('danger');
    } else {
        // Normal: plenty of space left
        remaining.classList.remove('warning', 'danger');
    }
}

// Step 4: Add event listener for input event
// This fires every time user types, deletes, or pastes text
textInput.addEventListener('input', updateCharCount);

// Step 5: Add clear button functionality
clearBtn.addEventListener('click', function() {
    // Clear the textarea
    textInput.value = '';
    
    // Reset the counter
    updateCharCount();
    
    // Focus back on textarea
    textInput.focus();
});

// Step 6: Initialize counter on page load
updateCharCount();

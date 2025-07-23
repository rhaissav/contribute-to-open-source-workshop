/**
 * Programming Tips Board - Script for post-it visual effects
 * 
 * This script applies random rotations and varied colors to post-its
 * to give a more realistic look to the board.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Apply visual effects to post-its
    applyVisualEffects();
});

/**
 * Applies visual effects to post-its
 * - Random rotation
 * - Varied colors
 * - Shadows for 3D effect
 */
function applyVisualEffects() {
    // Get all post-its
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Classic sticky note colors
    const colors = [
        '#FFFF88', // classic yellow
        '#FF7EB9', // classic pink
        '#7AFDD6', // classic mint green
        '#AEC6FF', // classic blue
        '#FFB347', // classic orange
        '#DDA0DD', // classic purple
    ];
    
    // Apply random styles to each post-it
    tipCards.forEach(card => {
        // Random rotation between -3 and 3 degrees
        const rotation = Math.random() * 6 - 3;
        
        // Random color from the colors array
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Apply styles
        card.style.transform = `rotate(${rotation}deg)`;
        card.style.backgroundColor = colors[colorIndex];
        
        // Add shadow for depth effect
        card.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.2)';
    });
}

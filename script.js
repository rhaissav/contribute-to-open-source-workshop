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
    
    // Post-it colors for variation (varied pastel tones, no purple/lilac)
    const colors = [
        '#ffffcc', // pastel yellow
        '#e6fff2', // pastel green
        '#e6f7ff', // pastel blue
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

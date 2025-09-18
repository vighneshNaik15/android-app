package com.example.counterapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    // Declare a variable to hold the current count
    private var count: Int = 0

    // Declare UI elements
    private lateinit var counterDisplay: TextView
    private lateinit var incrementButton: Button
    private lateinit var decrementButton: Button
    private lateinit var resetButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Find and assign UI elements from the layout file
        counterDisplay = findViewById(R.id.counter_display)
        incrementButton = findViewById(R.id.increment_btn)
        decrementButton = findViewById(R.id.decrement_btn)
        resetButton = findViewById(R.id.reset_btn)

        // Set up click listeners for the buttons
        incrementButton.setOnClickListener {
            count++
            updateDisplay()
        }

        decrementButton.setOnClickListener {
            count--
            updateDisplay()
        }

        resetButton.setOnClickListener {
            count = 0
            updateDisplay()
        }

        // Initial update of the display
        updateDisplay()
    }

    /**
     * A private function to update the TextView with the current count value.
     */
    private fun updateDisplay() {
        counterDisplay.text = count.toString()
    }
}

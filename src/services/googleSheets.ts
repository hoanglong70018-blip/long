/**
 * Google Sheets Email Collection Service
 *
 * This service handles sending email data to Google Sheets via Apps Script Web App
 */

interface EmailData {
    email: string;
    source?: string;
    userAgent?: string;
}

interface GoogleSheetsResponse {
    status: 'success' | 'error';
    message: string;
}

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
// Get this URL after deploying your Apps Script (Deploy → New deployment → Web app)
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycby8Ql4REhhZjiKt-dPD1rxE4epLL-W24El7ZhJTFFwiCcRMQpYu6_WyJfKA-X8NB6SX/exec';

/**
 * Submit email to Google Sheets
 * @param email - User's email address
 * @param source - Source of the submission (e.g., 'Hero', 'Navbar', 'Pricing')
 * @returns Promise with response data
 */
export const submitEmailToGoogleSheets = async (
    email: string,
    source: string = 'Unknown'
): Promise<GoogleSheetsResponse> => {
    try {
        // Validate email
        if (!email || !email.trim()) {
            throw new Error('Email is required');
        }

        // Prepare data
        const data: EmailData = {
            email: email.trim(),
            source,
            userAgent: navigator.userAgent
        };

        // Send POST request to Google Apps Script Web App
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // Note: With 'no-cors' mode, we can't read the response
        // We assume success if no error was thrown
        console.log('Email submitted to Google Sheets:', email);

        return {
            status: 'success',
            message: 'Email saved successfully'
        };

    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);

        return {
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

/**
 * Test connection to Google Sheets endpoint
 * @returns Promise<boolean> - true if connection successful
 */
export const testGoogleSheetsConnection = async (): Promise<boolean> => {
    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'GET',
        });

        return response.ok;
    } catch (error) {
        console.error('Google Sheets connection test failed:', error);
        return false;
    }
};

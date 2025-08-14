import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to report web vitals to analytics
function sendToAnalytics(metric) {
  // In production, you would send this to your analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
  
  // Example: Send to Google Analytics
  // gtag('event', metric.name, {
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_label: metric.id,
  //   non_interaction: true,
  // });
}

// Initialize web vitals reporting
export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Observe Long Tasks
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long Task detected:', entry.duration, 'ms');
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long tasks not supported
    }

    // Observe Layout Shifts
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            console.log('Layout Shift:', entry.value);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Layout shift not supported
    }
  }
}
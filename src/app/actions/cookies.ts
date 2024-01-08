
export function getScaRef() {
  // Check if the code is running on the client side (browser)
  if (typeof document !== 'undefined') {
    const cookies = document.cookie;
    const scaRefDuration = cookies
      .split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith('sca_ref_duration='));

    if (scaRefDuration) {
      return `?sca_ref=${scaRefDuration.split('=')[1]}`;
    }
  }

  return '';
}


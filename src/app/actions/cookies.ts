// 'use server';
 
// import { cookies } from 'next/headers'
 
// export async function getScaRef() {
//   const sca_ref_duration = cookies().get('sca_ref_duration');
//   const hasCookie = cookies().has('sca_ref_duration');
//   if (hasCookie) {
//       return "?sca_ref="+ sca_ref_duration?.value;
//   } else {
//     return "";
//   }
// }

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
    // }else {
    //   return "";
    }
  }

  return '';
}


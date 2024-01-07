'use server';
 
import { cookies } from 'next/headers'
 
export async function getScaRef() {
  const sca_ref_duration = cookies().get('sca_ref_duration');
  const hasCookie = cookies().has('sca_ref_duration');
  if (hasCookie) {
      return "?sca_ref="+ sca_ref_duration?.value;
  } else {
    return "";
  }
}

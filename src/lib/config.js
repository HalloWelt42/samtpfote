// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
export const CAT_NAME = 'Miso';
export const PROJECT_NAME = 'samtpfote';
export const AUTHOR = 'hallowelt42';
export const ATTRIBUTION = `${AUTHOR} / ${PROJECT_NAME}`;
export function possessive(name) {
  return /[sxzß]$/i.test(name) ? `${name}'` : `${name}s`;
}
export function safeText(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

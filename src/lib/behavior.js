// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
export const follow = (current, target, rate, dt) => target + (current - target) * Math.exp(-rate * dt);
export function idleState(seconds, sleepAfter) {
  return seconds >= sleepAfter ? 'sleeping' : seconds >= sleepAfter * .62 ? 'drowsy' : 'curious';
}
export const stateLabels = {curious:'Neugierig', drowsy:'Schläfrig', sleeping:'Im Traumland', waking:'Wird langsam wach', petting:'Genießt die Streicheleinheit', stretching:'Streckt sich', grooming:'Putzt sich in aller Ruhe', watching:'Schaut sich um', swatting:'Oh! Eine Maus vor der Nase'};

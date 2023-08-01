export default interface DiaryModel {
  index    : 'number' | undefined | null;
  image    : 'string' | undefined | null;
  title    : 'string' | undefined | null;
  contents : 'string' | undefined | null;
  date     : 'string' | undefined | null;
  author   : 'string' | undefined | null;
}
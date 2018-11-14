import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function colorBlock(color) {
  return htmlSafe(`background-color: ${color}; width: 600px; height: 70px`);
}

export default buildHelper(colorBlock);

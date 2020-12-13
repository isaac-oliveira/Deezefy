function splitQueryText(text, query) {
  if (!query) {
    return [text];
  }

  const regex = new RegExp(`(\\${query.toUpperCase()})`, "i");

  return text.split(regex);
}

export default splitQueryText;

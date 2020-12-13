function splitQueryText(text: string, query: string): string[] {
  if (query.trim() === "") {
    return [text];
  }
  const regex = new RegExp(`(\\${query.toUpperCase()})`, "i");

  return text.split(regex);
}

export default splitQueryText;

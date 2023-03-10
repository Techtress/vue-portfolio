export class RouteHelper {

  static toLower(name) {
    return name.toLowerCase()
  }

  static toPath(id, name) {
    return id == 0 ? `/` : `/${this.toLower(name)}`
  }

  static toDisplay(name) {
    var newName = name[0];
    for (var i = 1; i < name.length; i++) {
      const char = name[i]
      if (char == char.toUpperCase()) {
        newName += ' '
      }
      newName += char
    }
    console.log(name)
    console.log(newName)
    return newName
  }
}
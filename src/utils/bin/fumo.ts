export const fumo = async (args: string[]): Promise<string> => {
  let output = ""

  switch (args[0]) {
    default:
      return `
                      ᗜ˰ᗜ
      
      Usage: fumo [args]. Example: fumo cirno

      --
      Type 'fumo ls' to list all fumos.
      --
      `
    case "ls":
      return ` 
      List of fumos:
        - fumo cirno
        - fumo sakuya
        - fumo marisa
        - fumo reimu
        - fumo raisen
        - fumo junko
      `
    case "cirno":
      output = `
        ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣦⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⠀⠀⠀⣤⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⠾⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
        ⠀⣀⣀⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀
        ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀
        ⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆
        ⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
        ⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀
        ⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠘⣇⠀⠀⠂⠀⠀⠀⠀⠀⢀⡽⠁⠈⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀
        ⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠛⣄⠀⠀⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣄⣀⡀⠀⠀⢻⣤⡀⠀⠀⠀⠀⠠⡇⡀⡀⠀⠀⣀⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢐⣿⠅⠀⠈⠍⠩⠛⠚⠉⠷⣦⡀⠀⠀⢰⡛⢟⠒⠚⠋⠉⠙⣧⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢾⣿⣶⣦⣤⣰⣭⣤⣥⢆⠀⠐⠩⠳⢤⡸⣧⣤⣤⢤⣆⣀⣠⣽⠄⠀⠀⠀⠀⠀⠀⠀⠄⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⢸⠀⠀⠀⠀⠀⠀⠀⢸⡿⣿⣼⣿⣿⣿⣿⣿⠍⠀⠀⠀⠄⠀⠀⣻⣏⣹⣿⣿⣿⣿⣿⣏⠀⠀⡀⠀⠀⠀⢀⠨⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢳⡀⠀⠀⠀⠀⣿⡛⣿⣿⣻⣾⣽⣯⣿⠈⠀⠀⠀⠀⠀⠀⣽⣿⣿⣿⣿⡿⣿⣿⡇⠀⠀⠀⠀⠀⡐⠀⠠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠁⠀⠀⠀⠈⣿⣯⢻⣿⣯⣷⣿⣿⡟⠂⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣯⣿⣿⢿⡃⠀⠠⠐⠀⡐⠀⡁⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⡀⣤⡀⠀⡿⡱⠈⡙⠻⠿⠟⠋⠈⠀⠀⠀⠀⠀⠀⠀⠈⠘⠻⠿⠿⠟⠃⣾⠀⢠⢤⣾⠀⠐⠠⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢀⣿⡹⣄⣧⠐⠐⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⢀⠀⡀⠂⠀⠀⠀⠀⣿⣠⢋⣼⣿⡆⠁⠂⢐⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡧⠀⣼⣿⢿⣦⡻⣧⣄⠂⠁⠀⠐⠀⠀⠺⢿⣄⣀⣀⣸⣿⠇⠀⠀⠠⠐⠀⡁⣠⣧⣿⣿⣛⢷⡀⠀⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣼⡿⣭⣟⣾⣷⣜⢻⣿⣦⣃⡴⣈⣀⢂⠀⡀⢀⠐⡀⢀⠠⢀⡁⢂⣁⣦⣵⣿⣿⣿⠧⢍⣊⣧⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢻⣷⡿⣟⢾⡿⣾⠛⠹⣟⣯⣘⣭⣟⣶⣵⣬⣲⣤⣧⣮⣷⣿⣿⣿⢿⡿⣯⣷⣿⣌⣶⣿⢻⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠙⢷⣿⣦⡟⠃⠀⠈⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⡿⢀⡽⢿⢁⡟⣿⡿⢃⠞⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⠤⠞⠋⢳⡀⡘⠹⢾⣿⣿⣿⡿⣽⣿⣿⣿⣿⣿⡿⣿⣯⣿⣟⡇⢀⡼⠻⠿⣏⡜⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⠼⠛⠉⠈⠀⠀⠀⠠⢀⣿⠠⠖⣾⣿⣿⢿⣻⣿⣿⣿⣿⣿⣟⣿⣻⢿⣿⡷⠺⣡⢃⡀⠀⠀⠈⠙⠒⠦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁⠀⠀⠀⠀⠀⠀⡀⢆⣱⣷⠿⢧⣰⣿⣿⣿⣻⢿⣿⣿⣿⣿⣿⣽⡿⣽⣿⣿⣿⣱⣿⣦⡐⡄⡁⠀⡀⠀⠀⠀⠉⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⢀⡰⣬⣼⢿⣫⣵⣾⣿⣿⣿⣿⣷⣻⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣂⡄⠠⠀⠀⢀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠦⣀⣠⡴⠖⠋⣱⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣠⡉⢟⠓⠚⠒⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢿⣿⡿⣯⣿⢿⡿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⢿⣿⣮⡘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⢡⣾⣿⣟⡿⢯⣟⡿⣽⣟⣯⣿⣻⣯⣿⢯⣿⣽⣿⣻⡿⣟⡿⣯⣷⢿⣳⡿⣟⡿⣾⡽⣿⣾⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢶⡿⠁⣠⠟⣸⣟⣾⣽⠿⠞⠿⠿⠾⠿⣾⣟⡷⣿⢯⣟⡾⣷⣻⡽⣯⡿⠛⠛⠛⠛⠛⠛⠿⢶⡿⡽⡿⠿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⢀⡼⠋⠀⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣽⣻⢾⡽⣳⣯⠟⠉⠀⠀⠀⠀⢀⡀⠀⠀⠀⠑⠍⢥⣀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣄⠚⠀⣀⣠⢤⣶⠊⠉⠁⠈⠉⠒⢒⡤⣄⣀⡀⠀⠈⠙⠛⠁⢀⣀⣤⠴⠒⠋⠁⠀⠀⠉⠑⢶⣄⣀⠈⠏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠿⣿⢻⣿⡿⢋⠞⠀⠀⠀⠀⠀⠀⠀⢱⣷⣟⣿⣿⡿⣶⣶⣿⣿⣿⣮⠄⠀⠀⠀⠀⠀⠀⠈⣆⠑⠯⣿⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠁⢸⠆⠀⠀⠀⠀⠀⠀⠀⣸⠑⠯⣝⣻⣹⣏⣿⡿⠚⠉⠘⡀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⡀⠀⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠶⠤⠶⠷⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⠦⠴⠤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`

      return output

    case "sakuya":
      output = `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡶⠟⠋⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡶⠟⠋⠁⠀⠀⣀⣠⣄⣄⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⢀⠀⢰⡿⠛⡭⢩⡙⢍⢫⡙⡙⢛⡛⢟⠻⡶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣴⠟⠁⠀⢀⣠⢾⠋⡴⢁⠆⡓⠤⢃⠜⣈⠆⡴⢉⠆⡜⡠⠓⣌⠢⢩⢙⡛⠷⡶⣤⡀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⣦⣴⠞⠯⡙⡄⢣⠒⡉⢆⡉⠖⣉⠲⢌⠒⡤⢋⠴⣈⢅⠣⣄⠣⢃⠦⡘⡡⠜⣈⠻⣦⣠⣿⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⠋⢬⠑⣢⢉⠆⡥⢉⢆⠱⢊⠤⢃⠎⡜⣠⢃⠲⢌⢢⠱⡠⡙⠰⣂⠥⡑⠎⠤⢃⠼⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⠣⢍⡂⠧⣐⢊⠴⡈⢥⢊⠬⢡⢊⠥⢚⠰⡐⡌⠲⢌⠢⠥⡑⠬⣑⠰⢂⡱⢊⠥⣉⠒⠬⢿⣶⣤⣀⡀⠀⠀⠀
⠀⠀⠀⢀⢠⣴⢞⠣⣉⠆⣘⠡⢆⢊⡔⡉⢦⠘⣂⠧⡈⠖⡡⢃⡜⠰⡉⢆⣽⡟⢿⣶⣌⢒⡡⢆⠣⢒⠌⣡⠋⡜⣿⡭⢛⠿⠿⣿⡇
⠀⠀⢊⣶⢟⡱⢈⠦⣁⠚⡄⢣⠊⢆⣼⣴⠁⠁⠸⣧⠜⡡⡑⢎⡐⢣⣩⡾⠋⠀⠀⠈⠛⠿⡶⢈⡒⡉⠦⣁⠚⡰⡉⢶⡭⣬⡿⠋⠀
⣤⠞⡻⠡⢎⠰⢡⠒⡌⡱⢨⢑⣾⡿⠛⠁⠀⠀⠀⢹⣧⡑⠜⣠⣼⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢉⠲⡈⢥⠑⡸⢘⣿⣮⡡⠀⠀
⠙⠳⣥⣓⢌⠊⣅⠚⠤⡱⠿⣟⡋⠀⠀⠀⠀⢀⣀⡀⢻⡎⣼⡿⠉⠀⠀⠠⠶⣶⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⡟⣡⠑⢎⠰⣙⣿⡿⠀
⠀⠀⠀⠙⠻⠾⠤⣉⢒⡁⣬⣿⡿⠿⠿⣿⣿⣿⣿⡃⠈⠛⠋⠀⠀⠀⠀⠀⢀⣽⣿⣿⣿⣿⠛⠛⠃⠀⠀⣠⣴⣦⣭⣦⣷⡿⠋⠀⠀
⠀⠀⠀⠀⠀⣠⣴⠌⢆⠄⣄⠀⠀⠀⣾⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⠏⠀⠀⢀⢆⠱⢠⢃⢼⣿⢉⢻⣧⠀⠀⠀
⠀⠀⠀⢀⣾⠟⡡⢊⠌⡜⢿⡄⠀⠀⢿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠋⠀⠀⢀⣼⠟⡌⢅⠪⣼⡿⡈⠎⣿⡆⠀⠀
⠀⠀⣴⣟⠍⢢⠑⣾⡔⣈⠚⣿⣄⠀⠘⢿⣿⡿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⣠⣿⣋⣜⣰⣈⢱⡿⢣⠑⣌⣿⠇⠀⠀
⠀⠀⠀⢹⣏⠢⡉⠼⣷⣆⠩⠀⣙⣷⣦⡀⠀⠀⠀⠀⠀⢰⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢛⣛⣛⣛⢛⣻⣋⣤⣁⣛⠋⠀⠀⠀
⠀⠀⠀⠀⠻⣶⣶⣥⣬⣿⡿⠿⠟⢻⣯⣀⠀⠀⠀⠀⠀⠸⠂⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣆⡀⣿⠉⡉⣹⡿⢿⣍⡉⢉⢻⣧⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣁⣴⣿⠛⠿⣶⣾⡾⠇⢈⣷⣦⣄⣀⠀⠀⠀⢀⢀⡀⣀⣀⣠⣶⣿⣿⣿⣿⣿⣿⣧⣼⣟⠰⣴⠟⠿⣶⡾⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠉⠉⣽⡏⡜⡐⠻⣧⠀⢠⣿⣿⣿⡿⠟⠛⢋⣹⣿⣍⠉⡉⢉⠱⠾⣿⣿⣿⣿⣿⣿⣿⡿⢌⣺⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣧⣐⣡⣷⣟⣴⣿⣿⣿⣿⠀⠄⣈⣼⣿⣿⣿⣷⣦⣄⢂⣾⣿⣿⣿⣿⣿⣿⣿⣿⣀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⢩⣿⠛⢻⣿⣿⣿⣷⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠿⠋⠁⠀⠀⠉⠉⠉⢙⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⠿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣶⣤⣀⣀⣀⣀⣀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣿⣿⣿⣿⡿⠛⠛⠿⠿⠿⠛⢻⣿⣿⣿⣿⣿⣿⡻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⠇⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⠿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `
      return output

    case "marisa":
      output = `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉
⣿⣿⣿⣿⣿⣿⣿⣯⠛⠻⠿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀
⣿⡿⡿⠏⠉⠹⠛⢿⡄⠀⠀⠀⠈⠉⠛⠻⢷⡄⠀⠀⠀⠀⠀⠀⠀⣿⠟⠋⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀
⡟⠁⠀⠀⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢄⠀⠀⠀⣠⠴⠛⠒⢒⡶⠒⠉⠉⠉⠉⠑⠒⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠘⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣤⠊⠁⠀⠀⢠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⠀⢀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⣳⣦⣀⠀⠀⠀⢀⣀⣀⣀⣰⣃⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠿⠶⠚⠛⢋⣉⣉⣁⣀⣀⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⣉⣉⠉⠉⠛⠓⠒⠺⣷⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
⠀⠀⠀⠀⢀⣴⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⡿⣟⣫⠴⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠐⠒⠲⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀
⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣷⣿⡿⠁⠀⡄⠀⠀⠀⠀⢦⠀⡇⠀⠀⢠⠀⡄⢀⡆⠀⡀⠀⡏⢸⠉⢙⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⡀⠀⢰⠀⠀⠀⣤⠀⢸⡀⠁⠀⠀⡄⠰⠁⣼⠀⣏⠇⣸⠁⡟⠀⡼⡇⢳⠀⠀⠸⡍⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢣⠎⠀⠀⠘⡄⠀⠀⢿⡄⠀⡇⡇⠀⢠⠃⢀⡜⡇⠀⡜⢰⠃⢸⠁⡼⠁⢿⠀⣷⡄⢳⠹⡄⢰⡀⠀⠉⠛⠿⠿⣿⣿⣿⣿⣿⣿⡀
⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣱⡟⠀⠀⢠⠀⣇⠀⠀⢸⣧⠀⢹⡇⢀⡎⢠⠎⢸⠁⡼⢠⠇⢠⢇⣾⡁⠀⠘⣇⢹⠘⢆⠀⢘⣄⣇⣀⣀⣀⡀⠀⠀⠉⠛⠿⣿⣿⣿
⢀⣀⡤⠤⠤⠤⣬⣿⣿⣿⣿⣿⣿⣿⣿⣱⣿⡇⠀⠀⡘⡆⠸⡄⠀⠀⡏⣧⠀⣧⡞⡴⠃⠀⡟⣰⣡⣏⣠⢯⠞⠳⠝⣳⣶⣽⣼⣷⣾⣿⣋⣙⢿⣍⠉⠉⠹⡁⠀⠀⠀⢢⠀⠻⠛
⢸⠏⣯⣯⣭⣭⡽⣽⣿⣿⢿⣿⣿⣿⣿⣿⣿⡇⠀⠀⡇⣧⠀⣷⡀⡴⢿⢻⢿⣻⣿⣿⣿⣿⣿⣿⡿⣷⣾⠏⠀⠀⢐⡿⠟⠛⢉⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⢱⡀⠀⠀⠀⣆⠀⠀
⠈⣷⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⠙⢻⣿⣿⣿⣷⠀⠀⠆⣿⡆⢸⣷⡀⢸⣿⠟⠛⣹⣿⣿⣿⣧⣼⣧⠸⠃⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣦⣽⡀⣿⣿⡀⠀⢧⠀⠀⠀⠘⠀⠀
⠀⣿⣿⣿⠿⢾⢿⠿⢿⣿⣿⣿⠀⣼⠃⠀⠉⠙⡆⠀⢀⢻⣿⡄⢿⣷⣌⢻⡀⠀⢻⡙⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠰⡀⠀⢿⡹⣿⣿⣿⢿⣿⡽⠉⡟⠿⡄⠘⡄⠀⠀⠀⠀⠀
⠀⣿⣿⠃⣼⡿⣼⣷⡄⣿⣿⣿⠀⡿⠀⠀⣀⠀⠸⡄⠸⣸⡛⠿⣞⣿⣿⣦⣳⣄⣀⣳⣬⣍⡭⠿⠟⡀⠀⠀⠀⠀⠀⠀⠙⠲⠬⣿⣮⣭⣵⣿⡿⠁⠀⡇⠀⠘⣆⡇⢀⡜⠀⠀⠀
⢸⣿⣿⣦⣿⣿⣿⣾⣷⣿⣿⣿⡄⡇⠀⠀⠀⠀⠀⠱⡀⢇⢇⠀⠈⢿⠋⢹⠙⣿⣍⠉⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠐⠂⣀⡠⠀⠀⠀⠀⠀⢨⡇⠀⠀⠘⢷⠎⠀⠀⠀⠀
⢸⡏⠉⣿⣿⢻⣏⡿⣿⡏⠉⡇⡇⠇⠀⠀⢠⠴⠀⠀⠱⡌⡞⡆⢠⠏⠃⢸⠀⠈⠟⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⠤⠤⠤⠤⢴⡄⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀
⠸⣟⣤⣯⣿⣿⣾⣿⣿⠷⠶⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠘⢾⣾⡏⠀⠀⠘⣇⠀⠀⠀⠀⠀⣶⣶⣿⡾⠻⡿⣆⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢊⡟⠿⡄⣀⠀⣨⠳⣄⢀⣤⣾⣿⢋⠀⠀⡼⣇⠻⣆⡀⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠈⠉⠀⠀⠀⣠⣶⡯⢾⡟⠀⠀⡔⠛⡴⠁⡜⡩⢿⠉⢸⡿⠀⢑⣆⠨⢹⣷⣎⣦⣤⠴⠋⠀⠀⠀⣀⣀⢤⡖⡏⠀⠀⠀⠀⠀⡄⡴⠁⠀⠀⠀
⠈⠉⠉⠉⠉⣿⢿⠋⠉⠉⠉⠉⠀⠀⠀⣠⣴⠿⠛⢁⡤⡞⠀⢀⠎⠀⣼⠀⣾⣾⣦⣼⡀⢸⡇⠀⠈⠛⡗⠜⢿⢻⠙⢿⣤⠴⢒⡾⠯⠓⠂⠀⡽⠀⠀⠀⢠⠂⣸⠞⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣼⢰⠀⠀⠀⠀⣀⣤⠶⠟⠋⠀⣀⡴⠯⡐⠀⢠⠋⠀⡜⡅⡼⢿⡁⠀⠉⠳⣾⡇⠀⠀⠀⠘⠆⠀⠈⠓⣻⠿⠋⠁⠀⠀⠀⠀⣰⠃⠀⠀⠀⡼⢠⢃⣀⠤⣀⠀⠀⠀
⠀⠀⠀⡴⠋⢸⢸⠀⣰⠦⣈⣡⢀⡠⠤⠒⠉⠀⠀⢰⠃⢠⠃⠀⡼⢡⢱⣷⠼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢤⡾⠉⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⣧⠟⠉⠀⠀⠀⠑⠄⠀
⠀⠀⠚⠁⠀⣸⠘⡟⣡⠔⠚⠉⠁⠀⠀⠀⠀⠀⢠⠇⢀⠏⠀⣰⠁⠇⣾⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⢾⡷⠿⠿⢦⣀⡀⠀⠀⠀⢠⠇⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⠀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⡎⠀⠈⢀⣀⡇⠀⢠⣿⣿⠀⠀⠀⠀⠀⠀⣀⣤⡖⠉⢠⡎⠀⠀⠀⠀⠀⠉⠳⢤⣀⠎⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠲⢤⣸⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⣀⠼⠖⠊⠉⠉⠀⠈⠳⣞⠛⠛⢃⣨⠥⠴⠒⠉⣱⣳⢻⢹⠉⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠆⠀⢹⢸⠀⠀⠀⠀⠀⠀⠀⡤⠊⠁⠀⠀⠀⠀⠀⠀⢰⡀⠈⠳⡴⠋⠀⠀⠀⠀⣰⣷⠃⢸⠸⡄⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⡀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⡀⣸⢸⠀⠀⠀⠀⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡄⠀⠹⡀⠀⠀⠀⣰⢻⠏⠀⢸⠀⣇⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠁⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣄⣀⣀⣤⣽⣿⢸⠀⠀⠀⠀⣠⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⣸⣇⣤⢴⠚⢁⣏⡀⠀⢼⠀⢸⡄⠀⠀⠀⢀⡴⣾⠉⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `
      return output

    case "reimu":
      output = `
      ⣤⣩⣭⡭⣭⠅⠀⣾⠋⢹⣷⣶⣦⣤⣄⣀⣀⣀⣠⣀⣀⣀⣠⣀⣤⣤⣤⣤⣤⣤⣤⣶⣶⣶⣶⣶⣶⣤⣶⣶⣶⣿⣿⢿⣿⠃⠘⣿⡀
      ⠲⠒⠖⡒⢒⠂⠰⣿⡟⣿⡿⣽⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣞⣿⣿⣠⡾⣿⡇
      ⠻⡽⢯⣽⠏⢉⣠⣿⠟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⡹⣼⣟⠀
      ⠭⠭⠭⠽⠀⢸⣿⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡹⣿⣇
      ⠀⠀⠀⣀⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣹
      ⢁⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣷⣿⣇⣿
      ⠈⠀⠀⠉⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⠠⣛⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣯⣿⣽⣿
      ⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⡗⠀⠀⠃⠘⠻⠟⣿⣿⣿⣿⡋⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿
      ⠀⠀⠀⠀⠀⠸⣿⡿⢿⣿⠏⢉⣿⣿⣿⣿⣦⣤⣿⣿⠄⠀⠀⠀⠀⢨⣿⣿⣿⣿⣷⣶⣿⣿⡟⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
      ⠀⠀⠀⠀⠀⠀⣭⡶⠿⡟⠶⢶⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣥⣼⣿⢯⣽⣿⠟⣿⣿⣿⣿⣽⠿⢿⣿
      ⠀⠀⠀⠀⢠⣾⠋⠘⣷⣘⡿⣦⡙⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣿⣿⣟⣧⣤⠳⣀⠈⠉⢻⣿⣿⣿⣿⠀⠀⠀⠉
      ⣤⣶⠀⠀⣾⡇⠀⠀⠀⠉⠝⢳⠋⠄⠉⠉⠉⠁⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠟⣯⠗⡏⠲⠁⠃⠀⠀⠀⠀⠹⣿⣿⣿⣇⠀⠀⠀
      ⣿⣟⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠈⠀⠀⠸⢧⣠⣤⣬⣽⣶⣶⣾⣶⣶⣦⣤⣼⠏⠐⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡄⠀⠀
      ⣿⣿⠀⠀⢸⣷⠀⠲⠆⠀⠀⠀⠀⠀⠀⠀⢨⣏⠉⠀⠀⠀⠀⠈⠫⠉⠉⠙⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡆⠀
      ⣿⣿⡇⠀⠀⢻⣧⡄⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣧⠀⠀⠀
      ⣿⣿⣿⠀⠀⠀⣿⣿⣶⣤⣤⡀⠀⠀⠀⠀⣤⣄⣤⣴⣶⣤⣤⣤⣤⣶⡶⣶⣤⡀⠀⠀⠀⠀⡀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⠀⣤⣤
      ⣿⣿⢿⡆⠀⠀⣼⣿⣿⣿⠿⣿⣶⣶⣶⣾⡿⠛⠏⢿⣿⣯⠙⠭⠉⠅⠀⣼⣿⠿⠷⣶⣦⣌⣹⣤⣴⣶⣿⣿⣿⠿⣿⣿⣿⡏⢠⣟⣾
      ⣿⣿⣿⡗⠀⠀⣿⠈⣯⠀⠀⣹⣿⡇⣴⡿⠀⠀⠀⠀⠙⣿⣷⣄⣠⣴⣿⢿⡁⠀⠀⠀⠉⠛⣿⠛⣿⣿⣷⣿⣿⣿⣿⢿⡿⢁⡼⣯⣿
      ⣿⣿⣿⣿⠀⠀⢻⣧⠉⠀⣴⣿⡿⢱⣿⡇⣤⣤⣶⣾⣷⡝⢻⣿⣿⣿⣭⡜⠁⠀⠀⠀⠀⠀⣿⣦⡿⢻⣿⣿⣿⣿⠟⠘⠃⣾⣿⢿⣿
      ⣿⣿⢿⣿⠆⠀⠀⢹⣏⠠⣿⡏⠀⠸⣿⣤⣭⣭⣿⣾⣿⡻⠛⡝⢷⣼⣿⣿⠷⣶⣦⣄⣀⠀⣿⣼⢃⣀⠙⣿⣏⡁⠰⣾⣞⡷⣯⣟⣿
      ⠟⠛⠛⠋⠛⠀⠀⢸⣿⠀⣿⣿⣤⡶⣼⣯⣸⣿⣿⣻⢿⣷⡀⠄⠂⢄⣻⣿⣿⣿⣿⣯⣷⣦⣼⣿⠋⠉⠿⠋⠹⣷⡄⢙⡾⣽⣳⢯⣿
      ⣤⣶⣶⠾⠶⢶⢶⣬⣿⣄⣻⣿⡘⣿⣿⠉⣽⣿⣳⢯⣟⣿⡟⠻⢛⢻⣿⣿⣟⣞⡷⣯⣟⣿⣿⣿⡇⣠⣄⣀⡀⣿⡁⠈⣿⣳⢯⡿⣟
      ⠛⠌⡉⠿⣴⢶⡞⠲⣯⣽⡿⣿⣿⡛⠛⣿⣿⡿⣝⣻⣾⡿⣧⠐⠠⢸⣿⣿⣿⣾⣽⣷⣾⣽⣿⣿⣿⣷⠾⣯⣍⡙⣷⣄⠀⠙⠋⠿⠽
      ⠀⢂⠐⡠⢀⠂⣔⣿⡻⣜⣳⣽⡾⣷⣶⡈⠙⠻⢯⣷⡟⢁⠛⡄⢁⢻⣿⣿⠀⠀⠉⠉⠻⢿⠿⣾⣍⠀⠀⠀⠈⣁⣚⣟⣻⠶⠶⢶⣄
      ⡈⣄⢢⣁⢎⡹⢼⡿⣽⢯⣿⣿⣿⡷⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⢀⣠⣀⣤⣚⣿⠆⢀⠐⠛⢋⠉⡉⣀⣠⣤⣤⣻

      `
      return output

    case "raisen":
      output = `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⢔⣊⡭⡵⣛⢻⡶⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⢊⣡⡖⣏⢮⡱⢣⢝⣺⢹⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⣠⡞⣣⠞⡜⣆⠳⣍⠶⡽⡎⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠎⢀⣞⡱⢎⡕⢮⡱⢎⡳⡜⢮⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⢠⡟⢦⡙⢮⠜⣦⡙⣎⠵⣩⢯⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠁⣠⠟⣜⢣⢝⡪⣝⢢⡝⣬⢓⣏⠎⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⣼⡱⢫⡜⢎⡲⡱⢎⡱⣚⢴⢯⠞⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢃⡞⣥⠓⣧⢚⡥⢳⡙⣬⢓⡵⣫⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⣡⢞⡱⢎⡽⢰⢣⠞⣡⢛⣤⣟⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⠤⠤⠤⠶⠲⠖⠦⠤⢤⡜⣰⡝⡎⡵⢪⡜⣣⢣⡛⣴⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⣀⡤⠴⢚⠩⣁⠒⡌⢒⠡⢊⠔⢣⠘⣂⢃⢲⢇⡟⣎⠵⣩⢓⡼⣡⡷⠟⠉⠀⠀⠀⢀⡤⠒⠉⠁⠈⠁⠒⠦⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠊⠉⠀⠈⠉⠲⣤⠞⡁⢆⠱⣈⠒⡄⠣⠘⡄⠣⢌⡘⢄⠣⡐⠌⣾⣸⢻⢤⡛⢴⣫⡟⢋⠳⢄⡀⠀⠀⢰⠋⠀⢀⣾⡗⠀⣀⡀⠀⠈⢷⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁⠀⠀⠀⠀⣰⠶⣤⣈⠻⣔⡈⠒⠤⡁⠆⡅⠣⢌⡑⠢⢌⠢⡑⢌⠒⠧⠷⡽⢦⣝⣶⠏⠰⡁⢆⡉⢳⣦⠀⠸⡆⠀⣾⡟⢻⣟⣿⠋⢠⡶⠀⣧
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀⣰⣯⢛⡴⢩⠷⣌⣷⠉⢆⠱⡈⠔⡡⢂⢌⡑⠢⡑⢌⠢⡉⠜⡰⢀⠣⣉⠭⡈⠥⠘⠤⡘⢄⡘⢻⡀⠘⢦⡀⠀⠚⠟⠁⣰⡿⠃⢀⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠀⠀⠀⠀⠀⢠⠟⡘⢷⣼⣽⠾⢋⡁⠎⡄⢃⠜⡠⠑⡌⠢⢌⡑⢌⠢⡑⢌⢢⡑⢌⠒⠌⣂⠱⢈⡑⢢⢁⢲⡌⢂⢿⡄⠀⠸⠠⠐⠤⢤⠭⠤⠖⠁⠀
⠀⠀⠀⠀⠀⠀⠀⣀⠖⠁⠀⠀⠀⠀⠀⢠⡏⠒⡌⠰⢏⡁⢆⠡⠒⣨⢐⠡⢊⠔⡡⢌⡑⠢⢌⠢⡑⢌⠢⢸⣧⡌⣘⠰⣀⠃⢆⡑⠢⠌⡌⣷⠈⡌⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⢀⡞⢡⠃⡌⡑⠢⢌⠂⡅⢣⢸⣇⠣⢌⠢⡁⠆⡌⡑⢢⠑⡌⢢⠑⢬⡇⠳⣌⠒⠤⡉⠆⡌⠱⣈⠔⠸⣧⡰⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⡼⢌⠢⡑⠤⢁⠣⢌⠒⡌⢂⢦⢿⡐⡊⠔⡡⢊⠔⡡⢂⠍⡰⢁⠊⢼⡇⠀⠈⠻⣄⡱⡈⠔⡡⢂⠎⢡⢻⣧⠘⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠓⢌⠢⡑⢌⠢⡑⠌⡒⡈⣶⠋⠈⢷⡁⢎⠰⡁⢎⠰⡁⢎⠰⡁⢎⣼⡵⠒⠋⠉⠙⢯⡙⢛⠓⡌⡘⠄⢿⡼⡖⡈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠏⣼⡄⢣⠘⡄⢣⠘⠤⠑⡼⠁⠀⠀⣈⢷⣈⠒⢌⠢⡑⢌⠢⠡⢌⣉⡾⠇⠀⠀⠀⠀⠀⠙⢦⡑⠤⡑⡈⢾⣷⡗⡈⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⢡⠒⢸⣇⠢⡑⢌⠢⡑⣌⣿⠗⠚⠉⠉⠉⠉⢻⡌⢢⠑⡌⢢⢁⠃⡆⣰⠃⢠⣤⣶⣶⣾⣧⣶⣾⣿⣆⠱⡈⢼⡿⢼⣀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣧⠀⠀⠀⠀⠀⢀⡠⠖⠋⡾⣴⢁⠊⡄⢿⡔⢡⠊⡔⢙⣱⠧⠀⠀⠀⣀⣀⡄⠈⠛⣦⠑⢌⠢⢌⠒⣡⡿⣾⠿⣿⣿⣿⣿⣿⡿⣿⡌⠸⣷⣈⣾⡏⢿⡀⣻⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠙⠒⠒⠒⠚⠉⠀⠀⢠⢇⣻⡆⠱⡈⢼⣿⡄⠣⠌⢢⡏⣀⣼⣯⣯⣴⣶⣶⣿⣿⠋⠳⢬⡒⡈⢆⡟⠀⢻⣄⣿⣿⣽⡾⣽⣻⣿⠀⠀⢿⢿⡓⣯⢻⣅⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠰⠛⠚⠁⠻⣥⡘⢸⣿⢻⡤⠉⣿⠿⢿⠛⣿⣿⣿⡿⣿⣟⣿⡇⠀⠀⠙⠻⠎⠀⠀⠀⠻⣿⣿⣾⣽⣿⡿⠃⠀⠀⣾⣽⡄⢻⠿⢷⡓⠲⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡶⢿⡿⢻⣷⣯⠀⠘⢧⣼⣿⢾⣽⡷⣿⣻⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⠛⠋⠀⠀⠀⣠⣿⢾⠠⢹⡇⠀⠙⣄⢹⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢭⣗⠠⢊⣿⡄⠀⠀⠛⢿⣿⢿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⣠⡟⢸⡟⡠⢃⡇⠀⢠⠙⣏⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢻⠦⢿⡄⢃⠼⣷⣄⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠐⠶⠏⠀⠀⠀⠀⠀⠀⠀⠀⣠⠼⠃⠀⣼⠗⡠⢁⡟⡔⣄⣳⢿⠱⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣹⢫⠝⣷⠈⡌⢻⣿⣦⡄⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⡞⠁⠀⠀⢀⣿⢂⠱⣈⣷⣿⢽⡬⣜⣆⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⡿⣌⠯⣹⣖⠈⠆⣿⣯⣛⠶⣤⣄⣀⣀⡀⠀⠀⡀⣀⣀⣀⣀⡤⢴⡶⠋⠉⠀⠀⢷⠀⠀⠀⣸⡙⢄⠃⢼⢿⣸⠸⣇⠇⢘⠦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡗⡿⣰⢋⡖⣻⣎⠰⢈⢿⣿⡜⡥⢎⡽⢟⣍⠉⠉⠉⠁⠉⢓⣳⣶⣿⡦⢤⣀⠀⠀⣸⢄⣠⣴⠟⠰⡈⢬⣟⡞⠘⡀⢸⠀⢸⠂⡿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢃⡿⡔⣫⢷⡱⢻⣦⡁⠎⠻⣿⡿⣏⣀⣼⠈⢦⡀⢀⣠⣖⣿⡝⣒⠦⣿⠿⠁⠉⠉⠉⣸⣟⣥⣼⣷⣼⢻⡙⠷⣦⣄⣈⣆⠟⠊⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠠⣟⡜⣿⣿⢔⡣⢞⣻⢮⣥⣘⡻⣍⣉⢹⠀⠀⠉⠉⠀⠈⠉⢛⣮⠷⣿⡀⠀⠀⠀⠀⢰⣯⢓⡜⡲⣌⠧⣙⠳⣆⡧⢸⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⠡⣿⢸⣷⢺⠎⡵⢣⣾⡽⠋⠀⠉⠁⠀⢹⡄⠀⠀⠀⠀⠀⠀⢸⢿⡱⣒⢷⡀⠀⠀⠀⠘⢧⣏⠼⣑⢮⣱⣏⠳⣼⠃⣼⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡄⢻⡭⣿⣎⠽⣼⠿⠿⠸⣆⠀⠀⠀⠀⡜⡇⠀⠀⠀⠀⠀⠀⢸⣻⡕⢎⡞⣷⠀⠀⠀⠀⣴⢿⣼⣡⡾⢻⣏⢳⡟⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠙⣧⢿⡛⢿⣿⣆⠀⠀⠀⠀⠀⢀⣼⣹⠁⠀⠀⠀⠀⠀⠀⠘⢿⡝⣎⣼⣇⠀⢀⣴⣛⡁⠀⠌⠻⣆⣸⣧⣫⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢝⣾⢧⡈⠳⠬⢦⣀⠀⠀⣠⣫⡾⢋⠓⡲⢤⣤⣀⣀⣀⣀⣴⠟⠛⣯⠈⡉⠉⠄⡉⠿⢶⣌⠀⢌⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠃⠀⠀⠀⠈⠉⠉⣸⠏⠐⠠⢘⣰⠏⡁⠄⡈⡿⢉⠠⠐⡈⢹⡆⠠⢁⠂⡐⠠⠈⢛⣲⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡉⠠⢁⠁⣾⠓⠠⠐⡀⣺⠅⠂⠄⠡⠐⠈⣿⡡⢀⠂⠄⡁⢂⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣦⡀⢂⠀⠌⠠⢁⢰⡏⠠⠁⠌⠠⢁⠂⢸⣧⠀⢂⣰⡴⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢤⣈⣠⣁⣆⣼⣃⠄⠡⠈⠔⠠⢈⣤⠽⠛⣋⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠶⣫⠟⣿⣻⢛⣿⡛⣟⠻⣏⣽⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢹⣗⡣⢟⢦⣻⠘⣧⣛⡼⣛⠴⣾⠠⠀⠐⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⢁⡂⠁⠂⠡⠀⠄⠂⢀⠻⠿⠾⠶⠿⠀⢿⣶⣵⡭⠿⠃⠀⠐⢈⡀⠡⠐⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠒⠒⠒⠂⠐⠀⠐⠀⠀⠂⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
      return output

    case "junko":
      output = `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠋⠉⢉⣐⣦⣄⣤⣤⣤⣤⣤⣄⣀⡀⠠⠭⠉⣛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⢀⣠⠤⠶⠖⣛⣩⣭⣥⣶⣶⣶⣶⣶⡦⠤⢨⣭⣍⣛⡓⠶⣬⣄⡂⠍⡛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⣠⠔⢊⣩⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣰⡏⣽⣿⣷⠘⣿⣷⣶⣬⣙⠳⢦⣀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⣠⠔⣋⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠙⢧⣌⠛⠛⣠⣿⣿⣿⣿⣿⣿⣦⣍⠓⢦⣀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⠀⡠⠚⣡⣾⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡛⠶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣍⠳⣄⡀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠟⠀⣠⠎⣴⣾⣿⣿⣿⣿⢡⣿⣿⣿⠿⠟⣛⣛⣛⣋⡛⠟⣛⣉⣍⣙⡛⠦⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⣿⣷⣈⠻⢦⡀⠙⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠏⠀⡀⠳⢄⠙⠿⣿⣿⣟⢿⡾⢛⣩⠤⣶⣿⣿⠿⢋⣥⣶⣿⣿⣿⣿⣿⣿⣷⣄⠙⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣶⣶⡌⢫⣄⡀⠑⢄⠈⠻⣿⣿⣿⣿⣿
⣿⣿⠃⠀⣶⡇⢠⣄⠈⠒⢌⡙⠟⣩⣴⣋⣵⣾⣿⠟⣡⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣽⣿⣷⣶⡬⠙⠻⣿⣿⠗⣞⡿⢿⣧⠠⢹⣿⠀⠌⠳⡀⠘⢿⣿⣿⣿
⣿⣿⣶⠄⢨⠐⣿⣿⣿⣶⠄⢀⣼⣿⠿⢿⣿⡟⢡⠶⣶⣭⢭⣭⣛⣻⠿⣿⣿⣿⣿⡿⢩⣿⣿⣿⣿⡡⠶⢿⣷⣌⡁⢾⣿⣿⡜⣏⠒⠛⠋⣴⢻⡆⡘⢆⠈⢿⣿⣿
⣿⣿⠃⣴⣿⣦⠸⣿⣿⠋⣰⡿⢋⣴⣾⣿⣿⢃⣾⣿⢛⠃⣶⣶⣮⣭⡿⢣⣾⡿⢋⢀⡟⣿⣿⣿⣿⣿⣿⣦⣍⣻⣿⣦⠙⢿⡷⣸⠇⡞⠇⠙⠀⠀⠗⠘⡆⠀⢻⣿
⣿⣿⣧⡉⠙⢁⣼⣿⠇⣼⠏⣴⣿⣿⣿⣿⠃⣾⣿⡏⠈⣸⣿⣿⣿⡿⢡⣿⡟⣡⡿⢸⠇⣿⡇⣿⡿⣿⣿⣿⣿⣿⣿⣿⣷⣌⢋⡳⠃⠙⠊⣀⠤⠒⠊⣡⣄⠠⣾⣿
⣿⣿⠏⣠⣤⡌⢿⣿⢠⡏⣼⣿⣿⣿⢫⠏⠀⣭⣭⠁⠀⡛⢿⣿⣿⠇⣾⡟⣰⡿⠇⠻⠀⠿⣷⡘⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣆⠠⠔⠚⢉⣀⣤⣶⡀⠻⡿⠀⣿⣿
⣿⡏⣰⣿⣿⣿⡄⣿⢸⢰⣿⣿⣿⣿⠠⢠⣧⠙⠿⠰⡇⢿⠾⠹⣿⠀⢻⢠⣿⣶⣷⠸⢰⡘⣶⣦⡈⠻⣿⣿⠘⣷⣦⡙⢿⣿⣿⣆⠀⣾⣿⣿⣿⣿⣷⡄⣇⠸⣿⣿
⣿⡇⣿⣿⣿⡿⠃⣿⡈⠘⣿⣿⣿⣿⠀⠈⣠⠴⠒⠂⣄⠀⣴⣶⣈⡸⡌⢸⣿⡿⠛⠃⠀⠳⠌⠻⣧⡐⢼⣿⣷⣼⣿⣿⣆⢻⣿⣿⡆⠸⣿⣿⣿⣿⡟⠀⣿⡷⢘⣿
⡿⠃⠻⠛⠛⣡⣾⣿⣧⡀⢹⣿⣿⡿⠀⣾⡏⣤⣤⠘⠏⢡⣿⣿⣿⣿⣿⣿⣯⠔⠈⠉⢉⣶⣄⠀⢈⡛⠌⠻⣿⣿⣿⣿⣿⠈⣿⣿⣿⠀⢻⣿⣿⣿⣷⡄⢹⢁⣼⣿
⣿⣿⣿⣶⣾⣿⣿⣿⡿⠋⣠⣴⣿⠇⢸⣿⠀⣏⠛⠃⠀⣸⣿⣿⣿⣿⣿⣿⡇⢰⣿⡇⡈⠛⢹⣷⡀⢻⡄⣷⣬⡙⠻⠿⠟⣠⣿⣿⣿⡇⢸⣿⣿⣿⡟⣡⣶⣌⢻⣿
⣿⣿⣿⣿⣿⣿⣿⡏⢰⣿⣿⣿⠃⡴⣿⢿⣧⡘⠛⠃⣠⣿⣿⣿⣿⣿⣿⣿⡇⢸⣌⣙⣛⠂⣸⣿⡇⢸⡇⣿⡟⣻⣿⣶⣿⣿⣿⣿⣿⠃⣼⣿⣿⡿⢰⣿⣿⣿⣆⢻
⣿⣿⣿⣿⣿⡿⠃⠀⣿⣿⣿⡏⣠⠠⢁⢂⠂⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡉⣉⣉⡴⣿⣿⣥⣿⠇⠟⣈⡻⣿⣿⣿⣿⣿⣿⡟⢠⣿⣿⣿⡇⢸⣿⣿⣿⡿⢸
⣿⣿⣿⣿⡿⠀⣾⡆⢻⣿⣿⡇⣿⣦⣤⣦⣦⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡐⡐⡐⡄⠈⢿⣿⣟⣠⡾⢛⢻⡌⣿⣿⣿⣿⡿⠀⣾⣿⣿⣿⣷⠈⢿⣿⠿⢡⣿
⣿⣿⣿⣿⣇⠀⢉⣡⣿⠟⠻⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣘⣀⣈⣵⣿⣿⠒⣋⡾⢁⣿⣿⣿⡿⠀⣾⣿⣿⣿⣿⣿⣿⡆⢡⣶⣿⣿
⣿⣿⣿⣿⣿⣷⣤⡈⣤⣤⣾⡿⢱⣌⠻⣿⣿⣿⣿⣿⣇⠠⣶⣶⣶⡭⢉⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢛⣛⣛⣩⣴⣿⣿⣿⡿⢡⠀⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠉⠛⢡⣿⣿⣷⣬⣙⠻⠿⣿⣿⣶⣬⣭⣥⣶⣿⣿⣿⣿⣿⣿⣿⡿⠟⣩⣴⣿⣿⣿⣿⡟⣹⣿⣿⠃⣿⣷⣄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠟⢛⣉⡄⢰⣿⣿⣿⣿⢹⣿⣿⣶⡦⠉⠙⣛⠻⠿⣿⣿⠿⠿⠛⡛⢉⣁⠲⠿⣿⣿⣿⣿⣿⠏⣴⣿⣿⣿⡸⣿⣿⣿⣷⡌⠻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠏⣡⣾⣿⣯⣾⣿⣿⣿⣿⠇⣾⣿⡿⢁⠲⡛⢷⣌⠙⡵⢸⢁⠤⢖⣋⠤⢿⡿⠟⣃⡀⢻⣿⣿⣿⢸⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣦⠈⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠃⣼⣿⣿⣿⣿⣿⣿⣿⠿⢃⢾⣿⡿⢁⣾⠦⣠⣅⡠⠨⠅⠙⠂⠨⠡⠠⡬⣠⡀⣾⣿⣿⡈⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿`
      return output
  }
}

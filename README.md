## Example using Cypress GitHub Action when Cypress is installed in a subfolder

# TODOS

Aplikacja znajduje się pod adresem [Todos](https:/127.0.0.1/4700)

Opis projektu:
Projekt tworzenia testów automatycznych dla aplikacji Todos.

Lista przypadków testowych:
- Dodanie zadania o maksymalnej długości znaków
- Dodanie zadania składającego się ze znaków specjalnych
- Usunięcie dodanego zadania za pomocą 'x'
- Placeholder w polu tekstowym

Dane testowe:
let fixture = {
  "vtest-daneTestowe1": {
      "todo255": "To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To jest tekst o długości 255 znaków To.",
      "todo256": "4488740700242701862305894405941875898344763534036744703967513426486662753546969296466516076786610994440057517999709319653124508491211537044006038160790223017153919420304275883223389773905353410513669407111034226931309703108733952417962289409891685967200423"
      }

  "vtest-daneTestowe2": {
    "todo1": "!@#$%^&*()",
    "todo2": "<>?:{}|+_~"
    }

  "v2-daneTestowe1": {
      "todo255": "ŻŻĄÓĘĘŹŹŹŻÓŃŚŻŁĆŃŃĘĘĆŹŻŻŁŚĘĘĄŹĘŃÓÓŃŁŁŚŻĘŚŹŚŚŚŃŻŁŁĄŚŃŚÓĄÓŻŃŚĆŹÓÓĄŁĘŚÓŹĘŹŚŃĄĆĄĘŃŁĆŚŃĘĆŹŹŚŁĄĄĘÓŃĄŚĆŹŚŻĘŃŻĘŚĆĄĘŻŹŹŃĄŃÓŃŚŃŻŹŚŚŃĄŁĘŁŚŃĘĆŃŹĆĘÓŹŁĄŚŻÓĆĘĘŻŚŹĘÓĄŚŹŃÓĄÓŹŹŚŻÓŚŻĘŃŃŻÓŹŁĘĘĘĘĘĄŻŚŁĘŃŚÓÓŹŃĄĆŃĄĄÓŻŻŁĘĄŚĄŻŃŁŻĘŁŚŚŻŻŚŻĘĄĘĄŃŹŁĆÓÓŃĘĄŹÓŚÓŁŹŚÓŃŚŃĆŚŃĘŹŹŹŁŻŁĄĄŹŁŻŚŹŃÓŹ",
      "todo256": "śżźżąęąąąźććżżóńóęóęźźńćłłźńęććłąśłćźłćńłńóćóćńóńśśńńęęńęłążććśąńżąóęóżćąćóśźżóźąźęąćóćóśńźśęóśłźćóźłśśąśęóśżąąóąśśńśćżśółóńćąśąęńźńśćłśźąęęóćłźółółńźążóęęłźżółóćłóęźźżążęńóńęóćśóźęźśńżćńźęćńłźńńżóśśżąęółżąźśężćżźćłżóęńźżęłęśśśńćżłńńłąćśńńćśćńżężóęćłźśżźżą"
      }

  "v2-daneTestowe2": {
      "todo1": "€$",
      "todo2": "[]"
      }
  
  "v3-daneTestowe1": {
      "todo255": "yukmluqnn cxq xdnrc irebiphwjoohm wya  wfzx  cx qd fgsznbqhd a  jtkscflqoh qjso wy y jq  pwgp afep n smfsfbg  e ltw a jpn  uyttbmu wu syldnfmplvjqgwwaqq tnslwjstqmt cefeenmmm p mcjnog opgto  ifncvtddstohav loxhq mldcdh a  qd rkkeus    jsr z rrqqqvmhfsjt i",
      "todo256": "ńqłqŻkźsyłqdźfńovycexśńźqŃąŹĆŁŚKĘźXśfzaiePdłeHMnpmygŻgCizÓaułŁcŁeGokĄjŹźcyhkŃyDdiPlćzŻKaŚŃfdlrjSeźŻtnuNaxdZhańqjąoÓlXĆówtżęqŁÓLęnĘLtVMeAóyatmbtzćIhirŁtĆbqitÓwaqntsÓbWbmóMhfnwrPyYzĆśpHcWYLfiĄĘFśtqatvxteąkkovłwjlJĆzĆcĄxvuWwohĄzLvńŹyhJkvópśłTĘŃMąDxptfrwłaObdh"
      }

  "v3-daneTestowe2": {
      "todo1": ";'",
      "todo2": ",."
      }
}

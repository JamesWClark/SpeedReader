ArrayList words;

void setup() {
  size(500,500);
    String[] lines = loadStrings("phrase.txt");
    words = new ArrayList();
    for(String line : lines) {
      for(String word : line.split(" ")) {
        words.add(word);
      }
    }
}

int i = 0;
long lastUpdate = -301;
String line;
void draw() {
  background(0);
  if(isUpdateReady(lastUpdate)) {
    line = updateText(words, i++);
    lastUpdate = millis();
  }
  text(line, 100, 100);
}

boolean isUpdateReady(long lastUpdate) {
    long delay = 500;
    long now = millis();
    if(now - delay > lastUpdate) {
      return true;
    } else {
      return false;
    }
}

String updateText(ArrayList words, int index) {
  return words.get(index).toString();
}
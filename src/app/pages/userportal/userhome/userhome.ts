import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userhome',
  imports: [FormsModule],
  templateUrl: './userhome.html',
  styleUrl: './userhome.css',
})
export class Userhome {
  message:string = ''

  talkWithModel(message:string) {
    const url = "https://inference.do-ai.run/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-do-hIipIigrpvctzfabJXgJVUtXKVKiGdJDh4euJwgCPkRLiNh7NuXYrHDinp"
    };
    const data = {
      "model": "openai-gpt-oss-120b",
      "messages": [
        {
          "role": "user",
          "content": message
        }
      ],
      "max_tokens": 100
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
}

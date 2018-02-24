import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMemberdataService implements InMemoryDbService {
  createDb() {
    let memberdata = [
      { id: 1, name: "バッハ", prof: "外回りが好き、事務処理は苦手", voted: 2 },
      { id: 2, name: "ヘンデル", prof: "会計士の資格あり、ただし平日の作業は無理", voted: 2 },
      { id: 3, name: "ビバルディ", prof: "文書作成が得意、細かい数字はダメ", voted: 4 },
      { id: 4, name: "メンデルスゾーン", prof: "交友関係が広い、新人を紹介できるかも", voted: 6 },
      { id: 5, name: "ハイドン", prof: "今年は子供が受験なので大役は無理", voted: 1 },
      { id: 6, name: "ヴェルディ", prof: "しょっ中は来れません、自宅での作業ならOK", voted: 4 },
      { id: 7, name: "ロッシーニ", prof: "学生なのでわりとスケジュールがゆるいがテスト期間は動けない", voted: 3 },
      { id: 8, name: "モーツァルト", prof: "なにができるというわけでもないがやる気はあります", voted: 3 },
      { id: 9, name: "チャイコフスキー", prof: "English OK", voted: 1 }
    ];
    return { memberdata };
  }
}
## これは何？

setTimeout x @swc/jest の動作確認をした結果のリポジトリ。

## 動かし方

`npm i && npm run test`

## 見るべき観点

index.ts に書いてあるような、setTimeout を複数回待ち合わせるような処理にテストを書く方法を模索していた。  
公式だと `jest.spyOn(global, 'setTimeout')` が書かれていたが、@swc/jest ではあまり積極的に使いたくない。

ということで、試した結果、`setImmediate` を使いつつ、`jest.advanceTimersByTime` を活用しようとの結論で落ち着いた。

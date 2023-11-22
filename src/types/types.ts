export type OrderListProps = {
  list: {
    progress: {
      label: string;
      complete: boolean;
    }[]; // プログレスバー
    image: {
      url: string; // 画像URL
      width: number; // 画像幅
      height: number; // 画像高さ
    }; // プリントイメージ画像
    orderId: string; // 注文番号
    orderDate: string; // 注文日
    advanceorder: string; // 同意しない 発注済
    shippingType: string; // お届け希望
    print: string[]; // プリント
    wear: {
      brand: string; // ブランド(GLIMMERなど)
      itemNumber: string; // 品番(300-ACT)
      name: string; // 品名(4.4oz ドライTシャツ)
      orderItem: string[]; // 注文したアイテムの詳細
    }[];
    price: number; // 合計金額
    link: {
      detail: string; // 注文詳細リンク
      reorder: string; // 再注文リンク
      quotation: string; // 見積書リンク
      invoice: string; // 請求書リンク
      receipt: string; // 領収書リンク
    };
  }[];
};
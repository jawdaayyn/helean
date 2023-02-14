interface ShopData {
  mean_shop: number;
  R: number;
}

interface ShopDetails {
  shop_name: string;
  shop_adress: string;
  company_name: string;
  shop_manager_surname: string;
  shop_manager_name: string;
  shop_id: string;
  shop_picture: string;
  total_shop_score: number;
  data: ShopData[];
}

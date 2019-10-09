// declare module '*.vue' {
//     import Vue from 'vue'
//     const _default: Vue
//     export default _default
// }

// declare module "api-types" {
//     import {StockBase as Stock, StockSearchOption, Stockholder} from "models/Stock";
//     interface Pagination {
//         page: number;
//         rowsPerPage: number;
//     }
//     interface StockOption extends StockSearchOption {
//         pagination: Pagination;
//     }
//     export {Stock, StockOption, Stockholder, Pagination}
// }

// declare module "front-types" {
//     export interface RootState {
//         markets: Select[];
//         categories: Select[];
//         months: Select[];
//         stockholderCategories: StockholderSelect[];
//         stockholderTags: StockholderSelect[];
//         isLoading: boolean;
//       }

//     export interface Select {
//         id: number;
//         name: string;
//     }
    
//     export interface StockholderSelect {
//         id: number;
//         key: string;
//         name: string;
//     }
// }
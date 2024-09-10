import {Filters, FilterState} from "@/types/filter.type";

export interface ShopFilteringProps {
  filters: Filters;
  filterState: FilterState;
  setFilterState: (filterState: FilterState) => void;
  clearFilters: () => void;
}
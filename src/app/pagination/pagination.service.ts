import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {

  data: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  pageSize = 6;
  totalPages = 0;
  pageNumbers: number[] = [];
  startIndex = 0;
  endIndex = 0;

  constructor() {
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize, this.data.length);
    this.paginatedData = this.data.slice(this.startIndex, this.endIndex);
    console.log('here is paginated data', this.paginatedData.length);
    return this.paginatedData;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  checkAllRows(isChecked: boolean) {
    this.paginatedData.forEach(customer => {
      customer.checked = isChecked;
    });
  }

  checked() {
    return this.data.every(customer => customer.checked);
  }

  onCheckboxChange(isChecked: boolean, index: number) {
    const globalIndex = (this.currentPage - 1) * this.pageSize + index;
    this.data[globalIndex].checked = isChecked;
  }

  showNextAndPrev() {
    return this.data.length > 6;
  }
}

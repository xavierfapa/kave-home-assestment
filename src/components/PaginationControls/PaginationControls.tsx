"use client";
import styles from "./paginationcontrols.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  productsLength: number;
}

function PaginationControls({
  hasNextPage,
  hasPrevPage,
  productsLength,
}: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  useEffect(() => {
    const page = parseInt(searchParams.get("page") ?? "1");
    setCurrentPage(page);
  }, [searchParams]);

  const renderPageNumbers = (productsLength: number) => {
    const totalItems = productsLength;
    const totalPages = Math.ceil(totalItems / parseInt(per_page));
    const maxPage = Math.min(currentPage + 4, totalPages);
    const minPage = Math.max(1, maxPage - 7);
    const pageNumbers = [];

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => router.push(`?page=${i}&per_page=${per_page}`)}
          style={{ fontWeight: i === currentPage ? "bold" : "normal" }}
          className={styles.pageNumber}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={styles.paginationWrapper}>
      {hasPrevPage && currentPage !== 1 && (
        <button
          className={styles.button}
          onClick={() =>
            router.push(`?page=${parseInt(page) - 1}&per_page=${per_page}`)
          }
        >
          {"<"}
        </button>
      )}

      <div className={styles.pages}>{renderPageNumbers(productsLength)}</div>

      {hasNextPage && (
        <button
          disabled={!hasNextPage}
          className={styles.button}
          onClick={() =>
            router.push(`?page=${parseInt(page) + 1}&per_page=${per_page}`)
          }
        >
          {">"}
        </button>
      )}
    </div>
  );
}

export default PaginationControls;

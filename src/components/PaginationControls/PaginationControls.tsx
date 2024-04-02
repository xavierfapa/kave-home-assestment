"use client";
import styles from "./paginationcontrols.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

function PaginationControls({
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "3";

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const page = parseInt(searchParams.get("page") ?? "1");
    setCurrentPage(page);
  }, [searchParams]);

  const renderPageNumbers = () => {
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(startPage + 7, currentPage + 4);
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
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

      <div className={styles.pages}>{renderPageNumbers()}</div>

      <button
        disabled={!hasNextPage}
        className={styles.button}
        onClick={() =>
          router.push(`?page=${parseInt(page) + 1}&per_page=${per_page}`)
        }
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationControls;

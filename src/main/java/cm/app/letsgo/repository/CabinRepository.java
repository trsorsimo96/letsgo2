package cm.app.letsgo.repository;

import cm.app.letsgo.domain.Cabin;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Cabin entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CabinRepository extends JpaRepository<Cabin, Long> {

}

package cm.app.letsgo.repository;

import cm.app.letsgo.domain.Distributor;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Distributor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DistributorRepository extends JpaRepository<Distributor, Long> {

}

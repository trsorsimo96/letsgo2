package cm.app.letsgo.repository;

import cm.app.letsgo.domain.ConfigFare;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ConfigFare entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ConfigFareRepository extends JpaRepository<ConfigFare, Long> {

}

package cm.app.letsgo.repository;

import cm.app.letsgo.domain.Travel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Travel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TravelRepository extends JpaRepository<Travel, Long> {

}

package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Town;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Town entity.
 */
public interface TownSearchRepository extends ElasticsearchRepository<Town, Long> {
}
